def formatter(text: str):
    i = 0
    textLength = 1
    cnt = 0
    loopTimes = len(text)
    while cnt < loopTimes:
        textLength = len(text)
        if i < textLength - 1:
            if text[i] == '-':
                print('---formatted---')
                print(text[i])
                print('---formatted---')
                text = text[:i-1] + text[i+1:]
                print(len(text))
                print(textLength)

            elif text[i] == 'Ø':
                print('---formatted---')
                print(text[i])
                print('---formatted---')
                text = text[:i-1] + 'fl' + text[i+1:]
                textLength += 1
                print(len(text))
                print(textLength)

            elif text[i] == 'Æ':
                print('---formatted---')
                print(text[i])
                print('---formatted---')
                text = text[:i-1] + 'fi' + text[i+1:]
                textLength += 1

            elif text[i] == '®':
                print('---formatted---')
                print(text[i])
                print('---formatted---')
                text[:i-1].append('ff') + text[i+1:]
                textLength += 1
        else:
            break
        i += 1
        cnt += 1
    return text


if __name__ == '__main__':
    a = 'asdf;lkjasf;lkj'
    aLen = len(a)

    a = a[:3] + 'aaaakkk' + a[4:]
    print(a)
    print('')

    s = repr(input())
    print(s[:100])
    print('---formatted---')
    print(formatter(s))
