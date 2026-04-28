import sys

db_path = 'js/data/local-db.js'
with open(db_path, 'r', encoding='utf-8') as f:
    content = f.read()

stack = []
brackets = {'{': '}', '[': ']', '(': ')'}
in_string = False
string_char = ''
escaped = False

for i, char in enumerate(content):
    if escaped:
        escaped = False
        continue
    
    if char == '\\':
        escaped = True
        continue
    
    if char in ['"', "'", '`']:
        if not in_string:
            in_string = True
            string_char = char
        elif string_char == char:
            in_string = False
        continue
    
    if in_string:
        continue
        
    if char in brackets:
        stack.append((char, i))
    elif char in brackets.values():
        if not stack:
            print(f"Error: Unexpected closing bracket '{char}' at position {i}")
            print(f"Context: {content[max(0, i-50):i+50]}")
            sys.exit(1)
        top, pos = stack.pop()
        if brackets[top] != char:
            print(f"Error: Mismatched bracket '{char}' at position {i} (expected '{brackets[top]}' for '{top}' at {pos})")
            print(f"Context around mismatch: {content[max(0, i-50):i+50]}")
            sys.exit(1)

if stack:
    char, pos = stack[0]
    print(f"Error: Unclosed bracket '{char}' at position {pos}")
    print(f"Context around start: {content[pos:pos+100]}")
    sys.exit(1)

print("Brackets are balanced (string-aware).")
