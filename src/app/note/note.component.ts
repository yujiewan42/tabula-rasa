import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Note {
  entities: string[];
  note: string;
}
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notesCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>

  constructor(private firestore: AngularFirestore) {
  }

  ngOnInit(): void {
    this.notesCollection = this.firestore.collection('notes');

    this.notes = this.notesCollection.valueChanges();
  }

}
