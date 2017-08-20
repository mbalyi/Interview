import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ServerService implements InMemoryDbService {
  createDb() {
    let backend = [];
    return {backend};
  }
}