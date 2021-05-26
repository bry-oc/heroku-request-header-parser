function Welcome(){
    return(
        <div className="wrapper">
            <p><b>Welcome!</b> This is a request header parser microservice.  HTTP headers are used to share information between clients and a server.  In particular, a request header contains information about a client and their request to the server.  A response header has information about the server and the data requested by the client.  For example, headers are used to display webpages properly depending on the software and web browser of the client.  Based on these headers provided in the request, the server will respond accordingly.</p>
        </div>
        
    )
}

export default Welcome;