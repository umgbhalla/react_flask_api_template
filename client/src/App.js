import React, { useState, useEffect } from 'react'
import { styled, keyframes } from '@stitches/react'
import { violet, blackA, mauve, green } from '@radix-ui/colors'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import GithubCorner from 'react-github-corner'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: violet.violet6,
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
})

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
  width: 300,
})

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
})

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  '&:focus': { outline: 'none' },
})

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  )
}

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  color: mauve.mauve12,
  fontSize: 17,
})

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: '10px 0 20px',
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
})

// Exports

export const Collapsible = StyledCollapsible
export const CollapsibleContent = CollapsiblePrimitive.Content
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger
export const Dialog = DialogPrimitive.Root
export const DialogClose = DialogPrimitive.Close
export const DialogContent = Content
export const DialogDescription = StyledDescription
export const DialogTitle = StyledTitle
export const DialogTrigger = DialogPrimitive.Trigger
export const Separator = StyledSeparator

// Your app...
const Flex = styled('div', { display: 'flex' })

const Text = styled('span', {
  color: violet.violet11,
  fontSize: 15,
  lineHeight: '25px',
})

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: 'white',
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: mauve.mauve3 },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: green.green4,
        color: green.green11,
        '&:hover': { backgroundColor: green.green5 },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
})

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: violet.violet4 },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
})

const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  marginBottom: 15,
})

const Label = styled('label', {
  fontSize: 15,
  color: violet.violet11,
  width: 90,
  textAlign: 'right',
})

const Input = styled('input', {
  all: 'unset',
  width: '100%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,

  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
})

const IconButtonCollapse = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&[data-state="closed"]': { backgroundColor: 'white' },
  '&[data-state="open"]': { backgroundColor: violet.violet3 },
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
})

const Repository = styled('div', {
  backgroundColor: 'white',
  borderRadius: 4,
  margin: '10px 0',
  padding: 10,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
})

function App() {
  const [data, setData] = useState([{}])
  const [query, setQuery] = useState('')
  useEffect(() => {
    fetch('/getList')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
      })
    console.log(`you have updated your query to ${query}`)
  }, [query])

  const inputRef = React.createRef()

  const updateQuery = () => {
    const inputText = inputRef.current.value
    setQuery(inputText)
  }

  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Collapsible open={open} onOpenChange={setOpen}>
        <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Text css={{ color: 'white' }}>Get request content </Text>
          <CollapsibleTrigger asChild>
            <IconButtonCollapse>
              {open ? <Cross2Icon /> : <RowSpacingIcon />}
            </IconButtonCollapse>
          </CollapsibleTrigger>
        </Flex>

        <CollapsibleTrigger asChild>
          <Repository>
            <Text css={{ fontWeight: 600 }}>Click to expand list items</Text>
          </Repository>
        </CollapsibleTrigger>
        {typeof data.list === 'undefined' ? (
          <p>loading</p>
        ) : (
          data.list.map((item) => (
            <CollapsibleContent>
              <Repository>
                <Text>{item}</Text>
              </Repository>
            </CollapsibleContent>
          ))
        )}
      </Collapsible>

      <Separator css={{ margin: '15px 0' }} />

      <Dialog>
        <DialogTrigger asChild>
          <Button size='large'>Create Post request</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Item Contents</DialogTitle>
          <DialogDescription>Add value for new item</DialogDescription>
          <Fieldset>
            <Label htmlFor='name'>List Item</Label>
            <Input id='newItem' defaultValue='Item number' ref={inputRef} />
          </Fieldset>
          <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
            <DialogClose asChild>
              <Button aria-label='Close' variant='green' onClick={updateQuery}>
                Send POST request
              </Button>
            </DialogClose>
          </Flex>
          <DialogClose asChild>
            <IconButton>
              <Cross2Icon />
            </IconButton>
          </DialogClose>
        </DialogContent>
      </Dialog>

      <GithubCorner
        href='https://gitlab.com/umgbhalla/react_flask_api'
        bannerColor='#000'
        octoColor='#fff'
        size={80}
        direction='right'
        svgStyle={{ mixBlendMode: 'darken' }}
      />
    </>
  )
}

export default App
