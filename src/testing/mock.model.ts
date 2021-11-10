// T is the interface that the mock should implement
export abstract class MockModel<T> {
  protected abstract stub: T;

  constructor(createEntity: T) {
    this.constructorSpy(createEntity);
  }

  constructorSpy(_createEntity: T): void {}

  // It returns { exec } because that executes the query to db
  findOne(): { exec: () => T } {
    return {
      exec: (): T => this.stub,
    };
  }

  // Returns the stub in array form
  async find(): Promise<T[]> {
    return [this.stub];
  }

  // Saves the document in the db
  async save(): Promise<T> {
    return this.stub;
  }

  // Returns { exec } because that executes the query to db
  remove(): { exec: () => T } {
    return {
      exec: (): T => this.stub,
    };
  }
}
