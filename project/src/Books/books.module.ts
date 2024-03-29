import {Module} from '@nestjs/common'
import {BookController} from './books.controller'
import {BookServices} from './books.services'
@Module({
    controllers:[BookController],
    providers:[BookServices]
})
export class BookModule{}