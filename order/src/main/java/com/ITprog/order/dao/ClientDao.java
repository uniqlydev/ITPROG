package com.ITprog.order.dao;

import java.util.UUID;

import com.ITprog.order.model.Client;

public interface ClientDao {
    
    int insertClient(UUID id, Client client);

    default int insertClient(Client client) {
        UUID id = UUID.randomUUID();
        return insertClient(id, client);
    }

}
