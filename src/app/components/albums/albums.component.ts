import { Component, OnInit } from '@angular/core';
import { PhotosService } from './../../services/photos.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums;
  constructor(
    private photosService: PhotosService,
  ) { }

  ngOnInit() {
    this.albums = this.photosService.getAlbums();
  }

}
