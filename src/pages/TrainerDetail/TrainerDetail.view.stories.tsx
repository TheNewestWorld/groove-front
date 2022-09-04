import { Meta, Story } from "@storybook/react";
import TrainerDetailView, { Props } from "./TrainerDetail.view";

export default {
  title: "Pages/TrainerDetail/views",
  component: TrainerDetailView,
  args: {
    profile: {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/5f19/6166/3a1db2872671853e954b7ba5f084b209?Expires=1662336000&Signature=bxd9vusvobS6LTQDX7H2PFpZmz2ntX-Q-XdaEpvJl-qINAPNqR2XH5JlwT4-n0pQJAscEuG8tf3BUEVCOyYj-wndNStwf0qz12RPSa9pUTvY--qQSl8rVPE9dwf-BaSuUdMzOlR0DykUlswOKiMK2fstjT8cfuQIT28cXwjvw9PC2MNvT8ug8z6rzowSvi~ekqPu0cgR6hl8aCd7yAeWiaALbgq7bQpcoa5gDphPhU8C9n7hABDp06hgmqlXD03bYrxYyzUBHwUFWSSRNfoimvifsgB0lxNII8WhA~77qAtU8ts6m3RPdIrfIr2m~mRoc7BIiPb2QKSyQIiIfn4B1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      nickname: "Leannon",
      categoryName: "발라드",
      introduce: "버클리 음대 출신의 전문 트레이너",
      likeCount: 7082,
      commentCount: 2329,
      size: "LARGE",
    },
    introduce: {
      title: "소개",
      infoTextOrItems: [
        "Quam et consequuntur modi eum. Ea minus dolorum velit ut ullam perspiciatis ut doloremque voluptate. Quo quisquam earum  Aliquam repudiandae aut voluptatum. Eveniet laboriosam porro con.",
      ],
    },
    career: {
      title: "대표 경력",
      infoTextOrItems: [
        "Quam et consequuntur modi eum. Ea minus",
        "dolorum velit ut ullam perspiciatis ut",
        "doloremque voluptate. Quo quisquam earum",
        "natus reiciendis magni nobis commodi.",
        "Aliquam repudiandae aut voluptatum. Eveniet",
        "Quam et consequuntur modi eum. Ea minus",
        "dolorum velit ut ullam perspiciatis ut",
        "doloremque voluptate. Quo quisquam earum",
        "natus reiciendis magni nobis commodi.",
        "Aliquam repudiandae aut voluptatum. Eveniet",
      ],
      infoType: "LIST",
    },
    license: {
      title: "자격 사항",
      infoTextOrItems: [
        "Quam et consequuntur modi eum. Ea minus dolorum velit ut ullam perspiciatis ut doloremque voluptate. Quo quisquam earum natus reiciendis magni nobis commodi. Aliquam repudiandae aut voluptatum. Eveniet laboriosam porro consequatur error est in.",
      ],
      mediaList: [
        "https://s3-alpha-sig.figma.com/img/4f8d/b4fa/9be6900a586d93d484bd28dd3f84f9a6?Expires=1662940800&Signature=BmaCcR7kCnXaaJ0plrjROeUm9R27JVDgoUNyF2tiPYR2rNqfJGSvW6eo8UqQKIvX40wHxhl3DQ2Jm9yUvnsBqI6D1~KZdmXdhT7W-YFdGycP1k6AWubeHodcpU4QKCEZZO73~h9cFlaXThDkNDNjhKpAKLWo2JEIOtC3hkPo1D6fcihCHCMKBAU3q51-4BuJRCSFRbfGEZqBYaYUCLkP5iIOvsZwAzJBcX9ZuqHrmsuhTM4aQHqJsuubQz0qrWAkuIqY-YCPgtzeJlfUTuQbOCGMKMMqAd6rx7Q-yx2uwnJqCU94oSsC3s7PyfdFwq62AOToWWz5VnehCS8QTYZ1YQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "https://s3-alpha-sig.figma.com/img/1efc/a6e9/a5f8a1cd75693d9a328fbcf2b31a6655?Expires=1662940800&Signature=bFehhy5GnExI9BHs-xGe9EoIMN9OVCYbVbaIKXJo9T9WYiV6yFgJHBuAnP20uyV-XZJ3l-rWawGhxKygp6PJuZexqh5SdkDGyN~vX30dW-zvJTKxh8sDhRvKImS66AA~CV2HVrheFimIafsapXZVJK9QdsW~Vx3iJdEKbU-hDz4ZIYeKN708WRzCtPZ74sNMKEiCtYBx4~WLHGtaGZ4ucCzbWDNlAS-aK2P3ykJHApNLPaCKZpABVDA-OLiihf6bAssrjRZm-uRT9VfgujVwFccM5d5YKFcNUanFV8O9MCrBnrK0JAOWvCe48QBqQqD2MCuefDkBxx-uv2ii6EJpjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "https://s3-alpha-sig.figma.com/img/1efc/a6e9/a5f8a1cd75693d9a328fbcf2b31a6655?Expires=1662940800&Signature=bFehhy5GnExI9BHs-xGe9EoIMN9OVCYbVbaIKXJo9T9WYiV6yFgJHBuAnP20uyV-XZJ3l-rWawGhxKygp6PJuZexqh5SdkDGyN~vX30dW-zvJTKxh8sDhRvKImS66AA~CV2HVrheFimIafsapXZVJK9QdsW~Vx3iJdEKbU-hDz4ZIYeKN708WRzCtPZ74sNMKEiCtYBx4~WLHGtaGZ4ucCzbWDNlAS-aK2P3ykJHApNLPaCKZpABVDA-OLiihf6bAssrjRZm-uRT9VfgujVwFccM5d5YKFcNUanFV8O9MCrBnrK0JAOWvCe48QBqQqD2MCuefDkBxx-uv2ii6EJpjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      ],
      mediaType: "IMAGE",
    },
    skill: {
      title: "실력 검증",
      infoTextOrItems: [
        "Quam et consequuntur modi eum. Ea minus dolorum velit ut ullam perspiciatis ut doloremque voluptate. Quo quisquam earum natus reiciendis magni nobis commodi. Aliquam repudiandae aut voluptatum. Eveniet laboriosam porro consequatur error est in.",
      ],
      mediaList: [
        "https://s3-alpha-sig.figma.com/img/a11a/e475/330c0201891ad55f1a4d5cc9e1d12433?Expires=1662940800&Signature=WHq9emJrxFTBipgPht4CCu2ZcsWyeG1rJS5gIPMZ6nyLS6tJsusN9nSroraee1ovJvn-mBVqRyHYPtvUwSZKO~Oudkq5ChsgT5qxsr3p6bz-qryh~jR1wWEqFGe7q~fAnrr63pRFKbPaK8~qGhXCcJ8~9chxiMSzFf9QpIPzBFsZF41-9czxdI5KxdSwOtfYsH3VrvU1Awk9iqxZVNsSgkTlwuFG6uu0ew5kj7j9U4ZfSZA9l5LTi8ZRUPjxYXyM87YZHVlcrm9voLwrjq7jgeTKAXtUofB8uh1oppZ9F7dyqa-B-yHbFtVGPqmeE4J6tPILSPXcPgabHj83fqc4Jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "https://s3-alpha-sig.figma.com/img/a11a/e475/330c0201891ad55f1a4d5cc9e1d12433?Expires=1662940800&Signature=WHq9emJrxFTBipgPht4CCu2ZcsWyeG1rJS5gIPMZ6nyLS6tJsusN9nSroraee1ovJvn-mBVqRyHYPtvUwSZKO~Oudkq5ChsgT5qxsr3p6bz-qryh~jR1wWEqFGe7q~fAnrr63pRFKbPaK8~qGhXCcJ8~9chxiMSzFf9QpIPzBFsZF41-9czxdI5KxdSwOtfYsH3VrvU1Awk9iqxZVNsSgkTlwuFG6uu0ew5kj7j9U4ZfSZA9l5LTi8ZRUPjxYXyM87YZHVlcrm9voLwrjq7jgeTKAXtUofB8uh1oppZ9F7dyqa-B-yHbFtVGPqmeE4J6tPILSPXcPgabHj83fqc4Jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "https://s3-alpha-sig.figma.com/img/a11a/e475/330c0201891ad55f1a4d5cc9e1d12433?Expires=1662940800&Signature=WHq9emJrxFTBipgPht4CCu2ZcsWyeG1rJS5gIPMZ6nyLS6tJsusN9nSroraee1ovJvn-mBVqRyHYPtvUwSZKO~Oudkq5ChsgT5qxsr3p6bz-qryh~jR1wWEqFGe7q~fAnrr63pRFKbPaK8~qGhXCcJ8~9chxiMSzFf9QpIPzBFsZF41-9czxdI5KxdSwOtfYsH3VrvU1Awk9iqxZVNsSgkTlwuFG6uu0ew5kj7j9U4ZfSZA9l5LTi8ZRUPjxYXyM87YZHVlcrm9voLwrjq7jgeTKAXtUofB8uh1oppZ9F7dyqa-B-yHbFtVGPqmeE4J6tPILSPXcPgabHj83fqc4Jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      ],
      mediaType: "VIDEO",
    },
    trainingList: [
      {
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/a5c7/d048/72f93ceeb7be8a22efb40e454ebfcbe7?Expires=1662940800&Signature=RuqK4hLpiqI26Ey591ZKCYuK6A-PlFyu3V7nVJmPIX3D8~dZY3G4n9wOZ-UB8DG6XgTjhHdeJLC8m5l-zAZF79eXqF5vTjGKfHV5iSpxxzIsY5qGnwmD8nnksYJlrBZoTMKA~3ryQ59Q~jkBEfVW3TEAcxumT9xGR~nf1ynezaHBMgdSzI3EsNXSiWJ9imcIe95VCbs09jSKpoMYRB0pIikv0wiKIn0bAViDCbHBJWVg3Bw8~pQujgjCobUWQCP9lRs3YyOjkXJ9pLnNARmhZU68hJ-lFPGaWqRnyoit6QwYuj19fKhwfdyLJA3YR~inZ2IlVMKpFaA~KrcxyyxrfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        nickname: "미연",
        date: new Date(),
        content: "제가 이 곡을 한 번 불러봤는데요",
        status: "done",
      },
      {
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/ee8a/b228/ec32f40999102d0e091a25d514cb182c?Expires=1662940800&Signature=VhGV-TQxubec22kBeJwOa8tTT7-F5BuDv4yyrUXbSH3SMTv6Utt-E1AjkCxtqwu6ensdeocZnq27pySwMzWJ0o09hEL7WzjF06f68yt7AXCLjQVhm~ikR9vsIkZahqzfb0I2K35z4L98HuGm05~UEwaG4-notwRxc46Dh9LlWFq7llIqRZiKhkzSxFccehyAHHWl3HVaqRLlNptDm~IgL1yO0VGOqTP~t9enckWLNNoC730thw2OppLhr69zMtE87Ry-AOORt4L41PVUyedCxUQqxxwk96OpOjNNughBDRw5Iun4XqfojicImrl~r3W8bNWgqHbd92niDswnkx-jyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        nickname: "마가레트",
        date: new Date(),
        content: "코칭 부탁드립니당~",
        status: "ready",
      },
      {
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/ee8a/b228/ec32f40999102d0e091a25d514cb182c?Expires=1662940800&Signature=VhGV-TQxubec22kBeJwOa8tTT7-F5BuDv4yyrUXbSH3SMTv6Utt-E1AjkCxtqwu6ensdeocZnq27pySwMzWJ0o09hEL7WzjF06f68yt7AXCLjQVhm~ikR9vsIkZahqzfb0I2K35z4L98HuGm05~UEwaG4-notwRxc46Dh9LlWFq7llIqRZiKhkzSxFccehyAHHWl3HVaqRLlNptDm~IgL1yO0VGOqTP~t9enckWLNNoC730thw2OppLhr69zMtE87Ry-AOORt4L41PVUyedCxUQqxxwk96OpOjNNughBDRw5Iun4XqfojicImrl~r3W8bNWgqHbd92niDswnkx-jyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        nickname: "마가레트",
        date: new Date(),
        content: "코칭 부탁드립니당~",
        status: "ready",
      },
    ],
    reviewList: [
      {
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/5ff8/d24c/4cf60f05f859d0de472c33de7e8794b2?Expires=1662940800&Signature=argT08kV4gpc5cUU-hzQOIIm5gO49u5bHZmwjG5~z-Hjpek51okHHERc2ZhJnoOKVTyGQl9mzcEs9xipt68ccE31jKiBgGfl1zpHlcdW1oj7iNWPwekj5lhtz1ny8B5rU643YrjBO4B3j29rGBaf-W45F7TbmHB4NYY0co6iQzgKRRLbH8TEsDSvGePyR8QHozc-XG77PdfwwIwzD4SQ4iuJ3xKRKdIZDKZP~GgJXkW0T4VKccmvdbdPSS2bPE3EpnRd07WlDXbhgsD93tn9~QyJvZwnxZqGf5KpUPcw2XuIIS~eWtNQi1sEQHke8xan05AqA6~eBQ1aid4mcBfHuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        nickname: "Stokes",
        date: new Date(),
        content: "정말 잘 가르쳐주시고요 일단 최고에요.",
        score: 5,
      },
      {
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/5ff8/d24c/4cf60f05f859d0de472c33de7e8794b2?Expires=1662940800&Signature=argT08kV4gpc5cUU-hzQOIIm5gO49u5bHZmwjG5~z-Hjpek51okHHERc2ZhJnoOKVTyGQl9mzcEs9xipt68ccE31jKiBgGfl1zpHlcdW1oj7iNWPwekj5lhtz1ny8B5rU643YrjBO4B3j29rGBaf-W45F7TbmHB4NYY0co6iQzgKRRLbH8TEsDSvGePyR8QHozc-XG77PdfwwIwzD4SQ4iuJ3xKRKdIZDKZP~GgJXkW0T4VKccmvdbdPSS2bPE3EpnRd07WlDXbhgsD93tn9~QyJvZwnxZqGf5KpUPcw2XuIIS~eWtNQi1sEQHke8xan05AqA6~eBQ1aid4mcBfHuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        nickname: "Stokes",
        date: new Date(),
        content: "정말 잘 가르쳐주시고요 일단 최고에요.",
        score: 5,
      },
      {
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/5ff8/d24c/4cf60f05f859d0de472c33de7e8794b2?Expires=1662940800&Signature=argT08kV4gpc5cUU-hzQOIIm5gO49u5bHZmwjG5~z-Hjpek51okHHERc2ZhJnoOKVTyGQl9mzcEs9xipt68ccE31jKiBgGfl1zpHlcdW1oj7iNWPwekj5lhtz1ny8B5rU643YrjBO4B3j29rGBaf-W45F7TbmHB4NYY0co6iQzgKRRLbH8TEsDSvGePyR8QHozc-XG77PdfwwIwzD4SQ4iuJ3xKRKdIZDKZP~GgJXkW0T4VKccmvdbdPSS2bPE3EpnRd07WlDXbhgsD93tn9~QyJvZwnxZqGf5KpUPcw2XuIIS~eWtNQi1sEQHke8xan05AqA6~eBQ1aid4mcBfHuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        nickname: "Stokes",
        date: new Date(),
        content: "정말 잘 가르쳐주시고요 일단 최고에요.",
        score: 4,
      },
    ],
    reviewRating: 4.9,
    onClickHistory: () => alert(`코칭 내역 클릭`),
    onClickReview: () => alert(`코칭 후기 클릭`),
    onRequestCoaching: () => alert(`코칭 신청 클릭`),
  },
} as Meta;

const Template = (args: Props) => <TrainerDetailView {...args} />;

export const Default = Template.bind({});
