import { Component,OnInit } from '@angular/core';
import { ITodo } from './interfaces/itodo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from './confirmation-model/confirmation-model.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Todos";
  todoId: number = 0;
  todoList: ITodo [] = [];
  todoTitle: string;

  constructor(private modalService: NgbModal) {

  }
  ngOnInit(): void {
    this.todoTitle = '';
    this.todoList = [
      { title: 'School work', id: 1, description: "todolist2"}
    ];
  }

  addTodo():void {
    this.todoList.push({
      id: this.todoId,
      title: this.todoTitle,
      description: ''
    });
  
    this.todoTitle = '';
    this.todoId++;
  
  }


  async deleteTodo(todo: any) {
    const modal = this.modalService.open(ConfirmationModalComponent);
    modal.componentInstance.modalInstance = modal;

    try 
    {
      const answer = await modal.result;
    }
    catch(error)
    {
      console.log('modal did not return anything');
    }
    const answer = await modal.result;
    if(answer === 'yes'){
      const index = this.todoList.findIndex(todoItem => todoItem === todo);
      this.todoList.splice(index, 1);
    }
  }

}
