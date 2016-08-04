var api=require("../backend/createapp.js"),request=require("supertest"),tape=require("tape"),mockConnection=require("./mockconnection.js");tape("Get method response status is 200, content type is json",function(e){var n=api.createApp(mockConnection.mockConnectionMoreItems);request(n).get("/meals").expect("Content-Type",/json/).expect(200).end(function(n,t){n?e.fail():e.end()})}),tape("Post method response status is 200, content type is json",function(e){var n=api.createApp(mockConnection.mockConnectionOneItem),t={id:400,name:"watermelon",calories:100,date:"2016-08-15"};request(n).post("/meals").send(t).expect(200).expect("Content-Type",/json/).end(function(n,t){n?e.fail():e.end()})}),tape("Delete method response status is 200, content type is json",function(e){var n=api.createApp(mockConnection.mockConnectionOneItem),t={id:400};request(n).delete("/meals/:id").send(t).expect(200).expect("Content-Type",/json/).end(function(n,t){n?e.fail():e.end()})});