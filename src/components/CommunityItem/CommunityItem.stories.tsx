import { ComponentStory } from '@storybook/react';
import CommunityItem from './CommunityItem';

export default {
  title: 'Components/CommunityItem',
  component: CommunityItem,
  args: {
    user: "Greenholt",
    userImageSrc: "https://s3-alpha-sig.figma.com/img/0ef2/00bd/21e9d8636cd7f2313f0a4cdc049ed3ff?Expires=1659916800&Signature=bEnH98~PG-3HOc1pyeBrnXqFKdqUJ0RUm6cA8M6lsGnMXmAL69kct~dH0zUeTS8Z6MRqt6l65gDUbTvIo7y6qcWDQcJH~c0oXaDtwz2IPVvR6T429~t2n1bh-aIWbMebaD40FZJJNFQF~PTSQscj2p-MCr3L1DFMRTwc7oZ20EOPcsJAtJIYooXCfC-~C3uumyMH146ChpJIYynBfK8Os~BQvn~G8iIDffjHmqwi3P-QYA0LCTUuA9l4EitOUdYWRvm1OTdvdG2~vSca-ReVk3e1hOcelhK1iSjiRLL2KDMGe1cObsBxp-oKTDlJHYnQ6PnNM4c2zmIeh7mS5vLhZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    title: "보컬코칭 받아보신분 계신가요? 어땠는지 긴긴긴문장긴긴긴문장긴긴긴문장긴긴긴문장",
    description: "보컬코칭 받아보신분 계신가요? 어땠는지좀 알려주세요 제발요ㅠ궁금해서 미쳐버릴거 같으니까요 긴긴긴문장보컬코칭 받아보신분 계신가요? 어땠는지좀 알려주세요 제발요ㅠ궁금해서 미쳐버릴거 같으니까요",
    like: 1245,
    comment: 234
  },
};

const Template: ComponentStory<typeof CommunityItem> = (args) => <CommunityItem {...args} />;

export const 기본 = Template.bind({});