export async function wait(milliseconds: number): Promise<string> {
  return new Promise(resolve => {
    if (isNaN(milliseconds)) {
      throw new Error('millisecondshhhhhhhhh not a number')
    }

    setTimeout(() => resolve('done!'), milliseconds)
  })
}
