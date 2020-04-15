const teapotRoutes = [
    {
        method: 'GET',
        path: '/teapot',
        options: {
            handler: (req, h) => h.response("I'm a teapot").code(418),
            description: "I'm a teapot",
            notes: "I'm a teapot",
            tags: ['api, teapot'],
            response: {
                status: {
                    418: undefined,
                },
            },
        },
    },
];

export default teapotRoutes;
