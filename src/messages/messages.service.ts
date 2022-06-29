import { MessagesRepository } from "./messages.repository";

export class MessagesService {
  messageRepo: MessagesRepository;
  constructor() {
    //service is creating own dependancy
    // it doesnt happen in nest, so don't do this on real apps
    this.messageRepo = new MessagesRepository();
  }

  fineOne(id: string) {
    return this.messageRepo.findOne(id);
  }
  finAll() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    return this.messageRepo.create(content);
  }
}
