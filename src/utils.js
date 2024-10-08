export const users = [
    {
        id: 1,
        name: 'John Doe',
        title: 'Software Engineer',
        location: 'San Francisco, CA',
        avatar: 'https://azbyka.ru/wp-content/uploads/2015/09/zakon-moiseja-1.jpg',
        followers: 1200,
        posts: 35,
        following: 180,
    },
    {
        id: 2,
        name: 'Jane Smith',
        title: 'Product Manager',
        location: 'New York, NY',
        avatar: 'https://via.placeholder.com/150',
        followers: 980,
        posts: 50,
        following: 250,
    },
    {
        id: 3,
        name: 'Michael Brown',
        title: 'UX Designer',
        location: 'Austin, TX',
        avatar: 'https://via.placeholder.com/150',
        followers: 670,
        posts: 28,
        following: 145,
    },
    {
        id: 4,
        name: 'Emily Davis',
        title: 'Data Scientist',
        location: 'Boston, MA',
        avatar: 'https://via.placeholder.com/150',
        followers: 1540,
        posts: 40,
        following: 320,
    },
    {
        id: 5,
        name: 'David Johnson',
        title: 'DevOps Engineer',
        location: 'Los Angeles, CA',
        avatar: 'https://via.placeholder.com/150',
        followers: 890,
        posts: 45,
        following: 210,
    },
];

export const messages = [
    { author: 'Operator', timestamp: '10:00 AM', content: 'Hello! How can I assist you today?', isMyMessage: false },
    { author: 'Client', timestamp: '10:05 AM', content: 'Hi, I have a question about my order.', isMyMessage: true },
    { author: 'Operator', timestamp: '10:10 AM', content: 'Sure, please provide your order number.', isMyMessage: false },
    { author: 'Client', timestamp: '10:15 AM', content: 'My order number is 123456.', isMyMessage: true },
    {
        author: 'Operator',
        timestamp: '10:20 AM',
        content: 'Thank you. I see your order is being processed. Is there anything else I can help you with?',
        isMyMessage: false,
    },
    { author: 'Client', timestamp: '10:25 AM', content: "No, that's all. Thank you!", isMyMessage: true },
    { author: 'Operator', timestamp: '10:30 AM', content: "You're welcome! Have a great day!", isMyMessage: false },
];
