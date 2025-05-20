import React from "react";
import cn from "classnames";
import { MetaItem } from "@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileMetaItems";
import typography from "@/ui/typography/typography.module.scss";
import styles from "./ProfileMeta.module.scss";
import { IconLocation } from "@/ui/icons/general/IconLocation";
import { RecruiterProfileMetaItems } from "@/controllers/recruiterProfile/recruiterProfile.typedefs";

interface Props {
  items: MetaItem[];
}
export const RecruiterProfileMeta = React.memo<Props>((props) => {
  const { items } = props;

  return (
    <>
      <ul className={styles.metaWrapper}>
        {items.map((item) => {
          const isCity = item.name === RecruiterProfileMetaItems.City;

          return (
            <li
              className={cn(styles.recruiterMetaItem, typography.smallHeading)}
              key={item.name}
            >
              {isCity && <IconLocation />}
              {item.text}
            </li>
          );
        })}
      </ul>
    </>
  );
});
