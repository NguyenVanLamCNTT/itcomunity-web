import { TokenStorageService } from './../../services/token-storage/token-storage.service';
import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const customBuild = require('../ckCustomBuild/build/ckeditor.js');
import { MyUploadAdapter } from 'src/app/modules/posts/uploadAdapter';

@Component({
  selector: 'app-my-ck-editor',
  templateUrl: './my-ck-editor.component.html',
  styleUrls: ['./my-ck-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyCkEditorComponent),
      multi: true
    }
  ]
})
export class MyCkEditorComponent implements OnInit, ControlValueAccessor {

  public Editor = customBuild;
  token: string = '';
  @Input() readonly: boolean = false;
  @Output() public changeInput = new EventEmitter<string>();
  private _value: string = '';
  config: any

  get value() {
    return this._value;
  }

  set value(v: string) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  constructor(private tokenStorageService: TokenStorageService) {
    this.token = this.tokenStorageService?.getToken();
  }

  onChange(_: any) {
    this.changeInput.emit(this.value);
  }

  onTouch() { }

  writeValue(obj: any): void {
    this._value = obj;

  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }


  ngOnInit(): void {
    this.config = {
      toolbar: {
        items: [
          'heading', '|',
          'fontfamily', 'fontsize',
          'alignment',
          'fontColor', 'fontBackgroundColor', '|',
          'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
          'link', '|',
          'outdent', 'indent', '|',
          'bulletedList', '-', 'numberedList', 'todoList', '|',
          'code', 'codeBlock', '|',
          'insertTable', '|',
          'imageInsert', 'blockQuote', '|',
          'todoList',
          ,
          'undo', 'redo',
        ],
        shouldNotGroupWhenFull: true,
      },
      image: {
        // Configure the available styles.
        styles: [
          'alignLeft', 'alignCenter', 'alignRight'
        ],

        // Configure the available image resize options.
        resizeOptions: [
          {
            name: 'resizeImage:original',
            label: 'Original',
            value: null
          },
          {
            name: 'resizeImage:50',
            label: '25%',
            value: '25'
          },
          {
            name: 'resizeImage:50',
            label: '50%',
            value: '50'
          },
          {
            name: 'resizeImage:75',
            label: '75%',
            value: '75'
          }
        ],
        toolbar: [
          'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
          '|',
          'ImageResize',
          '|',
          'imageTextAlternative'
        ]
      },
      language: 'en'
    };
  }


  onReady(editor: any): any {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
      return new MyUploadAdapter(loader, this.token);
    };
  }
}
