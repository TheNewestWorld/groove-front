import { Meta } from "@storybook/react";

import AudioRecorder, { Props } from "./AudioRecorder";

export default {
  title: "components/audio/AudioRecorder",
  component: AudioRecorder,
  args: {
    onRecordingComplete: (blob: Blob) => {
      alert(blob.size);
    }
  },
} as Meta;

const Template = (args: Props) => <AudioRecorder {...args} />;

export const Default = Template.bind({});
