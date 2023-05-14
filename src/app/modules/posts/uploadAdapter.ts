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
      return new Promise<{ default: string }>((resolve, reject) => {
        if (!this.token || !file) {
          reject('Token not found!');
          return;
        }
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.it-community.tech/api/dms/upload', true);
        xhr.setRequestHeader('Authorization', 'Bearer ' + this.token); // if you're using JWT authentication
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        const formData = new FormData();
        formData.append('upload', file);
        xhr.send(formData);

        xhr.onreadystatechange = () => {
          setTimeout(() => {
            if (xhr.readyState === 4 && xhr.response !== '' && xhr.response !== undefined && xhr.response !== null) {
              if (xhr.status >= 200 && xhr.status < 300) {
                const response = JSON.parse(xhr.response);
                resolve({ default: response.data.fileName });
              } else {
                reject(xhr.response);
              }
            }
          }, 1000);
        };
      });
    });
  }
}
