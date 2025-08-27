public class BInarySearch {
    public static void main(String[] args){
        BinarySearchTree ab = new BinarySearchTree();

        //inserting Elements
        ab.insert(50);
        ab.insert(60);
        ab.insert(65);
        ab.insert(35);
        ab.insert(40);
        ab.insert(99);

        //Print Traversal
        ab.inorder();
        ab.preorder();
        ab.postorder();

        System.out.println("Search for 99" + ab.search(99));
        System.out.println("\n deleting 50....");
        ab.delete(50);
        ab.inorder();

        System.out.println("\n deleting 40...");
        ab.delete(40);
        ab.inorder();
    }
    
}


class Node{
    int data;
    Node left;
    Node right;

    public Node(int data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}



class BinarySearchTree{
    Node root;

    public BinarySearchTree(){
        root = null;
    }

    //inserting a node
    public void insert(int data){
        root = insertRec(root, data);
    }
    private Node insertRec(Node root, int data){
        if(root == null){
            root = new Node(data);
            return root;
        }
        if(data < root.data){
            root.left = insertRec(root.left, data);
        } else if(data > root.data){
            root.right = insertRec(root.right, data);
        }
        return root;
    }

    //searching a node
    public boolean search(int data){
        return searchRec(root, data);
    }
    private boolean searchRec(Node root, int data){
        if(root == null){
            return false;
        }
        if(root.data == data){
            return true;
        }

        if(data < root.data){
            return searchRec(root.left, data);
        } else{
            return searchRec(root.right, data);
        }
    }

    //deleting a node
    public void delete(int data){
        root = deleteRec(root, data);
    }

    private Node deleteRec(Node root, int data){
        if(root == null){
            return root;
        }
        if(data < root.data){
            root.left = deleteRec(root.left, data);
        }else if(data > root.data){
            root.right = deleteRec(root.right, data);
        }else{

            // node with only one child
            if(root.left == null){
                return root.right;
            }else if(root.right == null){
                return root.left;
            }

            //node with 2 Children
            root.data = minValue(root.right);
            root.right = deleteRec(root.right, root.data);
        }
        return root;
    }

    private int minValue(Node root){
        int minValue = root.data;

        while(root.left != null){
            minValue = root.left.data;
            root = root.left;
        }
        return minValue;
    }

    // Tree traversal
    public void inorder(){
        System.out.print("Inorder: ");
        inorderRec(root);
        System.out.println();
    }

    private void inorderRec(Node root){
        if(root != null){
            inorderRec(root.left);
            System.out.print(root.data + "");
            inorderRec(root.right);
        }
    }

    public void preorder(){
        System.out.print("Preorder: ");
        preorderRec(root);
        System.out.println();
    }
    private void preorderRec(Node root){
        if(root != null){
            System.out.print(root.data + "");
            preorderRec(root.left);
            preorderRec(root.right);
        }
    }

    public void postorder(){
        System.out.print("Postorder: ");
        postorderRec(root);
        System.out.println();
    }
    private void postorderRec(Node root){
        if(root != null){
            postorderRec(root.left);
            postorderRec(root.left);
            System.out.print(root.data + "");
        }
    }
}