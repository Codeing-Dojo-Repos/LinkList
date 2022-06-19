
class node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class sll{
    constructor(){
        this.head = null
    }

    addFront(data){
        let new_node = new node(data)

        if (!this.head){
            this.head = new_node
        }else {
            new_node.next = this.head
            this.head = new_node
        }
        return this
    }

    removeFront(){
        if (!this.head){
            return null
        }
        let old_front = this.head
        this.head = old_front.next

        return old_front
    }

    getFront(){
        if (!this.head){
            return null
        }
        
        return this.head.data
    }

}