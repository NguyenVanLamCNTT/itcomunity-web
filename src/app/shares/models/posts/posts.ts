import { User } from "../user/user";

export interface Posts {
    id?: number;
    name: string;
    topics: number[];
    content: string;
    keywords: string[];
    status: string;
    imageUrl: string;
    author?: User;
    bookMarkNumber?: number;
    commentNumber?: number;
    created?: Date;
    imageThumbnail?: string;
    isDeleted?: boolean;
    isTrending?: boolean;
    modified?: Date;
    viewNumber?: number;
}