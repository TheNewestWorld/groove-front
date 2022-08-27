import { Meta } from "@storybook/react";

import UserProfile, { Props } from "./UserProfile";

export default {
  title: 'components/UserProfile',
  component: UserProfile,
  args: {
    src: "https://s3-alpha-sig.figma.com/img/b7aa/0962/1a8f293ebdc9d7319fcf78d5b394601a?Expires=1661731200&Signature=SDWov0fmf5U~nHJ~dgyAtMEQXCug9Xsj8SOLaORFYu2e3DdzpTMrQJXBRGZXyiZqEc9k5bZUfd26nJFa9CJHg~X2W3lWmaJmb7Up8wax59hewwMmyBxYcoby3xkxHeIt1aymgSEBd-jISvj7PFyaQWsz8iBNmlnLU-POoRvYt4CrQnMaKPgNJxEe40hbdHLYTHRzray3VcYSgD21bO5pq8SYTYvw6yhqGMj6y7VoQCE1ASCmmrMmOVL1SBExTRPLBwkEw3wi-s0x9epUzVW6O7T87MdguvFXwD-jhM2Ecvsl1jnO0673WAeMxQVEIt58PXBiOWENfyD-wD9Z1mQHxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    onClick: () => alert("프로필 클릭"),
  },
} as Meta;

const Template = (args: Props) => <UserProfile {...args} />;

export const Default = Template.bind({});
