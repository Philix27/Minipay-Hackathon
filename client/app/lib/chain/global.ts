export function hey() {}

declare global {
  interface window {
    ethereum: any
  }
}
