import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getStartMessage(): string {
    return 'Welcome to ywc19-hackathon-f API!!'
  }
}
