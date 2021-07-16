
import { Modal } from "./Style";

const InfoModal = () => {
    return (<Modal>
        <h3>
            The Binary Gap Problem
        </h3>
        <p>This is a React project based on finding the binary gap of a number</p> 
        <p> The idea of this is to take input and convert it into a binary sequence. the program then will count the number of concurrent 0's that are located in between 1's.</p> 
        <p>EX: 10010 has a Binary gap of 2</p>
    </Modal>)
}

export default InfoModal;