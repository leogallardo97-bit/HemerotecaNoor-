db_path = 'js/data/local-db.js'
with open(db_path, 'r', encoding='utf-8') as f:
    content = f.read()

stack = []
brackets = {'{': '}', '[': ']', '(': ')'}
for i, char in enumerate(content):
    if char in brackets:
        stack.append((char, i))
    elif char in brackets.values():
        if not stack:
            print(f"Error: Unexpected closing bracket '{char}' at position {i}")
            sys.exit(1)
        top, pos = stack.pop()
        if brackets[top] != char:
            print(f"Error: Mismatched bracket '{char}' at position {i} (expected '{brackets[top]}' for '{top}' at {pos})")
            sys.exit(1)

if stack:
    char, pos = stack[0]
    print(f"Error: Unclosed bracket '{char}' at position {pos}")
    sys.exit(1)

print("Brackets are balanced.")
