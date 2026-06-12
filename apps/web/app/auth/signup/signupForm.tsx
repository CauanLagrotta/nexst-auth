import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/submitButton";

const signupForm = () => {
  return (
    <form action="">
      <div className="flex flex-col gap-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name..."
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email..."
          />
        </div>

        <div>
          <Label htmlFor="password">password</Label>
          <Input
            id="password"
            name="password"
            type="text"
            placeholder="Enter your password..."
          />
        </div>

        <SubmitButton>Sign up</SubmitButton>
      </div>
    </form>
  );
};

export default signupForm;
