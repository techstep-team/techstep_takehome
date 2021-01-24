import { List, Avatar } from 'antd';

export default function UserList({ data }) {
  return (
    <List
      itemLayout='horizontal'
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={item.name}
            avatar={
              <Avatar size='large'>
                {item.name.match(/\b(\w)/g).join('')}
              </Avatar>
            }
            description={`${item.location} | ${item.email}`}
          />
        </List.Item>
      )}
    />
  );
}
