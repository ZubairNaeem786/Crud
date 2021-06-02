import {Injectable} from '@nestjs/common';
import {Book} from './booksInterface'
@Injectable()
export class BookServices{
private books:Book[]=[];
create(book:Book)
{
    this.books.push(book);
    return book
}
findAll()
{
    return this.books
}
remove(id)
{
    const data=this.books.filter(book=>book.id!==id)
    this.books=data
    return this.books
}
update(body)
{
    this.books.map((obj,i)=>
    {
        if(obj.id===body.id)
        {
            obj.name=body.name
            obj.writer=body.writer
            obj.price=body.price
             
        }
    })
    return this.books
}
}