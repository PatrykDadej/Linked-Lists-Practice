class LinkedList {
    constructor() {
        this.head = null
        this.length = 0        
    }
    insertAtHead(data) {
        const newNode = new LinkedListNode(data, this.head)
        this.head = newNode
        this.length++
    }
    
    insertAtTheEnd(data) {
        let cn = this.head
        while (cn.next != null) {
            cn=cn.next
        }
        cn.next = new LinkedListNode(data,null)
        this.length++
    }

    size(){
        if (this.head === null) return 0
        else { 
            let counter = 1
            let cn = this.head
            while (cn.next != null) {
                cn=cn.next
                counter++
            }
            return counter
        }
    }

    header() {
        if (this.head = null) return
        else {
            return this.head
        }
    }

    tail() {
        if (this.head = null) return
        let cn = this.head
        while(cn.next != null) {
            cn = cn.next
        }
        return cn
    }

    atIndex(index){
        if (this.head = null) return
        let cn = this.head
        let indexCounter = 0
        while (indexCounter != index) {
            cn = cn.next
            indexCounter++
        }
        return cn.value
    }

    poper(){
        let cn = this.head
        let indexCounter = 0
        while (indexCounter != this.length - 1) {
            console.log(cn.value)
            cn = cn.next
            indexCounter++
        }
        cn.next = null
        this.length--
    }

    containsik(toFind){
        if (this.head === null) return
        let cn = this.head
        let counter = 1
        while (counter <= this.length) {
            if (cn.value === toFind){
                return true
            }
            else {
                cn = cn.next
                counter++
            }
        }
        return false
    }

    find(value) {
        if (this.head === null) return
        let cn = this.head
        let counter = 0
        while(counter <= this.length){
            if (cn.value === value){
                return counter
            }
            else {
                cn = cn.next
                counter ++
            }
        }
        return null
    }

    toString(){
        let cn = this.head
        let counter = 1
     
        if (cn === null) return null
        let myString = ''
        while (counter <= this.length) {
            if (counter === 1) myString = cn.value
            else {
                myString += ` --> ${cn.value}`
            }
            counter++
            cn = cn.next
        }
    return myString
    }
}

class LinkedListNode {
    constructor(value, next){
        this.value = value
        this.next = next
    }
}
