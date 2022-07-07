import { faker } from '@faker-js/faker';

export default class FACTORY2 {
    static nome(){
        return faker.name.findName()
    }

    static dataNascimento(){
        let data = faker.date.birthdate()
        data = data + ""
        data = data.split(" ")
        let dictionary = { Jan:"01" , Feb:"02" , Mar:"03" , Apr:"04", May:"05" , Jun:"06" , Jul:"07" , Aug:"08" , Sep:"09" , Oct:"10" , Nov:"11" ,Dec:"12"} 
        data = data[2] + dictionary[data[1]] + data[3]
        return data
    }

    static email(){
        return faker.internet.email()
    }

}