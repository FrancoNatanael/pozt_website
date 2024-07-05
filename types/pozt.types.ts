export interface Pozt {
    id: number;
    title: string;
    author: string;
    short_description: string;
    category_id: number,
    text: string;
    let_translate: boolean;
    let_read: boolean;
}

export interface FilterOptions {
    all: boolean;
    selectedCategory: {id: number; category: string; description: string;} | null;
    textToFilter: string;
    saved: boolean;
}