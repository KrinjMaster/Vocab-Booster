import { env } from '$env/dynamic/public'

export const getDictUrl = (word: string): string => {
  return `${env.PUBLIC_DICTIANORY_API}/${word}`
}
