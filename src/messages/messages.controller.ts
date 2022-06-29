import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from "@nestjs/common";
import { retry } from "rxjs";
import { CreateMessageDto } from "./dtos/create-message.dto";
import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.finAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
    console.log(body);
  }
  @Get("/:id")
  async getMessage(@Param("id") id: string) {
    const message = await this.messagesService.fineOne(id);
    if (!message) {
      throw new NotFoundException("message not found");
    }
    return message;
    // console.log(id);
  }
}

//we use pipe to validate data in nest js
//NEST gives us ValidationPipe which we can use in main.ts
