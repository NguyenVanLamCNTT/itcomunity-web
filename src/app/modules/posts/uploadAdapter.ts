import { FileLoader, UploadAdapter } from "@ckeditor/ckeditor5-upload/src/filerepository";


export class MyUploadAdapter implements UploadAdapter {
  private readonly loader: FileLoader;
  token: string | null = null;
  constructor(loader: FileLoader, token: string) {
    this.loader = loader;
    this.token = token;
  }
  
  abort(): void {
    throw new Error("Method not implemented.");
  }

  upload(): Promise<{ default: string }> {
    return this.loader.file.then((file: any) => {
      console.log(file);
      return new Promise<{ default: string }>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://139.59.107.238:5000/api/dms/upload', true);
        xhr.setRequestHeader('Authorization', 'Bearer ' + this.token); // if you're using JWT authentication
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                const response = JSON.parse(xhr.response);
              resolve({ default: response.data.fileName });
            } else {
              reject(xhr.response);
            }
          }
        };
        const formData = new FormData();
        formData.append('upload', file);
        xhr.send(formData);
        xhr.onload = () => {
          console.log('xhr.response', xhr.response);
        }
      });
    });
  }
}
