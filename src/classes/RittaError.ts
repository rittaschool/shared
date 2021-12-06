export class RittaError extends Error {
  name = "RittaException";
  type: string;

  constructor(message: string, type: string) {
    super(message);
    this.name = "RittaException";
    this.type = type;
  }
}
