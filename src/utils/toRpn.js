export const toRpn = statement => {
  let result = '';
  let stack = [];

  const operators = {
    '+': {
      priority: 0
    },
    '-': {
      priority: 0
    },
    '*': {
      priority: 1
    },
    '/': {
      priority: 1
    },
    '^': {
      priority: 2
    }
  };
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let i = 0; i < statement.length; ++i) {
    const char = statement.charAt(i);

    if (digits.includes(char)) {
      result += char;
    } else if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      let str = stack.pop();

      while (str && str != '(') {
        result += str;
        str = stack.pop();
      }
    } else if (Object.keys(operators).includes(char)) {
      while (operators[stack.slice(-1)[0]] >= operators[char]) {
        result += stack.pop();
      }

      stack.push(char);
    }
  }

  let sym = '';

  while (sym = stack.pop()) {
    result += sym;
  }

  return result;
}
