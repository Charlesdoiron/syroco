import { Input } from "components/ui/input";
import { useState } from "react";

interface Props {
  onChange: (value: string) => void;
}

export const Filters = ({ onChange }: Props) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: string) => {
    setSearch(e);
    onChange(e);
  };

  return (
    <div>
      <Input
        label="Search by scenario title"
        placeholder="13800"
        id="title"
        value={search}
        onChange={(v: any) => handleSearch(v.target.value)}
      />
    </div>
  );
};
