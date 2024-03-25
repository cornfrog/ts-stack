interface MyStackInterface<Type> {
    length: number;

    push(item: Type): void | undefined;
    pop(): Type | undefined;
    print(): void;
}

class MyStack<Type> implements MyStackInterface<Type>{
    private items: Type[];
    length: number;
    constructor(length = 0) {
        if(length === 0){
            console.log("Initializing stack with 10 items");
        }
        this.length = length;
        this.items = [];
    }

    private initStack(length: number): null[] {
        const initializedItems: null[]= []
        for(let i = 0; i < length -1; i++){
            initializedItems[i] = null;
        }
        return initializedItems;
    }
    push(item: Type): void | undefined {
        if (this.items.length === this.length) {
            throw new Error("Method not implemented.");
            return undefined;
        }
        this.items[(this.length - 1) - this.items.length] = item;
    }
    pop(): Type | undefined {
        throw new Error("Method not implemented.");
    }
    print(): void {
        throw new Error("Method not implemented.");
    }
}

export default MyStack;