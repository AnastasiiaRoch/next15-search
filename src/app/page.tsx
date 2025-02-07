import React from 'react';
import Typography from '@/components/Typography';
import InputField from '@/components/InputField';
import Button from '@/components/Button';

const HomePage = () => (
  <>
    <Typography
      variant="h1"
      option="landing"
    >
      Heading 1
    </Typography>
    <Typography variant="h2">Heading 2</Typography>
    <Typography variant="h3">Heading 3</Typography>
    <Typography variant="h4">Heading 4</Typography>
    <Typography variant="h5">Heading 5</Typography>
    <Typography
      variant="p"
      option="medium"
    >
      Text
    </Typography>

    <Button>My Button</Button>

    <InputField
      label="My Input Component"
      placeholder="Input placeholder"
      variant="input"
      // rows={5}
    />
  </>
);

export default HomePage;
