import { Component, OnInit } from '@angular/core';
import { Entry } from '../shared/Entry.model';
import { EntryService } from '../shared/Entry.service';

@Component({
  selector: 'app-Entry-list',
  templateUrl: './Entry-list.component.html',
  styleUrls: ['./Entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[] = [];
  constructor(private EntryService: EntryService) { 
    
  }

  ngOnInit() {
    this.EntryService.getAll().subscribe(categories => this.entries = categories,
      error => alert('Erro ao carregar a lista')
      )
  }

  deleteEntry(Entry){
    const deveDeletar = confirm('Você deseja realmente excluir esse item?');
    if(deveDeletar){this.EntryService.delete(Entry.id).subscribe( ()=> this.entries = this.entries.filter(e => e != Entry),
      ()=> alert('Erro ao tentar excluir.'))}
  }
}
