package com.ITprog.order.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ITprog.order.model.Client;
import com.ITprog.order.service.ClientService;

@RestController
public class ClientController {
    

    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @PostMapping
    public void AddClient (Client client) {
        clientService.AddClient(client);
    }
}
