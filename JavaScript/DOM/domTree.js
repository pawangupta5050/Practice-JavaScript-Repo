// Text Node - The node that contains Empty Space and New Line.
// Parent Node - The node that divides that contains the child nodes.
// Child Node - The node that contains the information about the Parent Node.
// { White Space : Normal } - It hides the Space and New Line in the Browser (Default Browser Behaviour).
// .getRootNode() - Returns the HTML that is root node of the Document
// .parentNode - Returns the parent Node of that Element.
// .childNodes - Returns the child Node of that Element.
// .previousSibling - Returns the previous sibling Node of that Element.
// .nextSibling - Returns the next sibling Node of that Element.
// .previousElementSibling - Returns the previous Sibling Element Node of that node.
// .nextElementSibling - Returns the next Sibling Element Node of that node.
// .children - Returns only the Element Nodes and ignores Text Node.

// DOM Tree -----> With The reference of index.html file

//                                               Document - Root Node (JS Object)
//                                                               |
//                                               HTML - Child Node of Document (Root Element)
//                         ______________________________________|_____________________________________
//                        |                                      |                                    |
//            Head - Child Node of HTML                          |                           Body - Child Node of HTML
//          ______________|______________________          ("/n" - New Line        ___________________|___________________
//         |              |       |      |      |            and Space)           |                   |                  |
//    ("/n" - New Line    |       |      |      |            Text Node       ("/n" - New Line         |               ("/n" - New Line
//        and Space)      |       |      |      |                               and Space)            |                 and Space)
//        Text Node       |       |      |      |                               Text Node             |                 Text Node
//                      Title     |    Script   |                                                     | 
//                      (Child    |    (Child   |                                            DIV - Child Node of BODY
//                       Node)    |     Node)   |                              _______________________|_________________________________________
//                         |      |             |                             |                   |              |                |            |
//           Text Node-->( Dom    |           ("/n" -                      ("/n" - New Line       |        ("/n" - New Line       |         ("/n" - New Line
//                    Traversing) |           New Line                        and Space)          |           and Space)          |            and Space)
//                                |           and Space)                      Text Node           |           Text Node           |             Text Node 
//                             ("/n" -        Text Node                                           |                               |
//                            New Line                                                            |                               |
//                            and Space)                                                       h1 - Heading                    p - Paragraph
//                            Text Node                                                       (Hello World!)                 (Lorem ipsum....)
//                                                                                              Text Node                        Text Node




