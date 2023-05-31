package com.ITprog.order.service;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.ITprog.order.dao.ClientDao;
import com.ITprog.order.model.Client;


@Service
public class ClientService {
    
    private final ClientDao clientDao;

    public ClientService(@Qualifier("ClientDAO") ClientDao clientDao) {
        this.clientDao = clientDao;
    }

    public int AddClient (Client client) {
        return clientDao.insertClient(client);
    }
}
