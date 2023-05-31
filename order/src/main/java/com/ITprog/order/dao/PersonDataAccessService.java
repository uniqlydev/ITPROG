package com.ITprog.order.dao;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.UUID;

import org.apache.tomcat.util.json.JSONParser;
import org.apache.tomcat.util.json.ParseException;
import org.springframework.stereotype.Repository;

import com.ITprog.order.model.Client;

@Repository("ClientDao")
public class PersonDataAccessService implements ClientDao{

    private static String UsersPath = "src/main/java/com/ITprog/order/database/clients.json";

    public void ReadJson() throws FileNotFoundException, ParseException{
        FileReader fl = new FileReader(UsersPath);
        Object obj = new JSONParser(fl).parse();

        System.out.println(obj);
    }

    public boolean addClient(Client client){
        // do something
        return true;
    }

    @Override
    public int insertClient(UUID id, Client client) {
        return addClient(client) == true ? 1 : 0;
    }
    
}
