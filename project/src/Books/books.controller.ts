import {Controller,Post,Get,Put,Delete,Param,Body,Query} from '@nestjs/common'
import {createBookDto,UpdateBookDto} from './books.dto';
import {BookServices} from './books.services'
import {Book} from './booksInterface'
@Controller('books')
export class BookController
{
  constructor(private bookServices:BookServices){}
  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookServices.findAll();
  }

@Post()
create(@Body() createBookDto:createBookDto){

   return this.bookServices.create(createBookDto);
}
@Put()
async update(@Body() body) {
  return this.bookServices.update(body)
}

@Delete()
async deleteCourse(@Body() body) {
    // const courses = await this.coursesService.deleteCourse(query.courseId);
    return this.bookServices.remove(body.id);
}
}