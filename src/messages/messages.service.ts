import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";


@Injectable()
export class MessagesService {
  constructor(public messageRepo: MessagesRepository) {}

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
