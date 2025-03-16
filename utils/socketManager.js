const activeUsers = new Map();

const handleSocketConnection = (ws, wss) => {
    console.log('New client connected!');

    ws.on('message', (data) => {
        const message = JSON.parse(data);

        switch (message.type) {
            case 'new-user':
                activeUsers.set(message.userId, ws);
                console.log(`User connected: ${message.userId}`);
                break;

            case 'message':
                const broadcastMessage = JSON.stringify({
                    type: 'message',
                    sender: message.userId,
                    text: message.text,
                });

                // Broadcast to all clients
                wss.clients.forEach((client) => {
                    if (client.readyState === ws.OPEN) {
                        client.send(broadcastMessage);
                    }
                });
                break;

            default:
                console.error('Unknown message type:', message.type);
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        for (const [key, value] of activeUsers.entries()) {
            if (value === ws) activeUsers.delete(key);
        }
    });

    ws.on('error', (err) => {
        console.error('WebSocket error:', err.message);
    });
};

module.exports = { handleSocketConnection };
