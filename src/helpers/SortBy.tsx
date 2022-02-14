import { UserCardProps } from "../UserProfile/UserProfile.tsx";

interface UserListProps {
  sortWay: "name" | "city" | "none";
  data: UserCardProps;
}

export default function sortBy(props: UserListProps) {
  const { sortWay, data } = props;

  if (sortWay === "name") {
    data.sort((a: UserCardProps, b: UserCardProps) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
  if (sortWay === "city") {
    data.sort((a: UserCardProps, b: UserCardProps) => {
      if (a.address.city < b.address.city) {
        return -1;
      }
      if (a.address.city > b.address.city) {
        return 1;
      }
      return 0;
    });
  }
}
